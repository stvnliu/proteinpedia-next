{ pkgs, lib, config, inputs, ... }:

{
  name = "proteinpedia-next";
  # https://devenv.sh/basics/
  env.GREET = "devenv";

  # https://devenv.sh/packages/
  packages = [ pkgs.git pkgs.mongosh ];
  cachix.enable = true;
  # https://devenv.sh/scripts/
  scripts.prompt.exec = "echo devenv up command available to load a ferretdb and postgresql server.";

  enterShell = ''
    git --version
  '';

  # https://devenv.sh/tests/
  enterTest = ''
    echo "Running tests"
    git --version | grep "2.42.0"
  '';

  # https://devenv.sh/services/
  # services.postgres.enable = true;

  # https://devenv.sh/languages/
  languages = {
    javascript = {
      enable = true;
      npm.enable = true;
    };
    typescript.enable = true;
  };
  # https://devenv.sh/pre-commit-hooks/
  pre-commit.hooks = {
    shellcheck.enable = true;
    denofmt.enable = true;
    denolint.enable = true;
    commitizen.enable = true;
  };
  # https://devenv.sh/processes/
  processes = {
    ferretdb.exec = "${pkgs.ferretdb}/bin/ferretdb --postgresql-url=\"postgres://ferretdbuser:password@127.0.0.1:5432/ferretdb\"";
    proteinpedia-dev.exec = "npm run dev";
    pingtest.exec = "ping archlinux.org";
  };
  services.postgres = {
    enable = true;
    initialDatabases = [{name = "ferretdb";}];
    initialScript = ''
    CREATE ROLE postgres SUPERUSER;
    CREATE USER ferretdbuser;
    GRANT ALL PRIVILEGES ON DATABASE "ferretdb" TO ferretdbuser;
    GRANT ALL ON SCHEMA public TO ferretdbuser;
    '';
    listen_addresses = "*";
    settings = {
      log_connections = true;
      log_statement = "all";
      logging_collector = true;
      log_disconnections = true;
      #log_destination = lib.mkForce "syslog";
    };
  };
  # See full reference at https://devenv.sh/reference/options/
}
