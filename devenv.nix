{ pkgs, lib, config, inputs, ... }:

{
  # https://devenv.sh/basics/
  env.GREET = "devenv";

  # https://devenv.sh/packages/
  packages = [ pkgs.git ];
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
    commitizen.enable = true;
  };
  # https://devenv.sh/processes/
  processes = {
    ferretdb.exec = "${pkgs.ferretdb}/bin/ferretdb --postgresql-url=\"postgres://ferretdbuser:password@127.0.0.1:5432/ferretdb\"";
    proteinpedia-dev.exec = "npm run dev";
  };
  services.postgres = {
    enable = true;
    initialDatabases = [{name = "ferretdb";}];
    initialScript = ''
    CREATE USER ferretdbuser;
    GRANT ALL PRIVILEGES ON ferretdb.* TO ferretdbuser;
    '';
  };
  # See full reference at https://devenv.sh/reference/options/
}
