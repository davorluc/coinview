with import <nixpkgs> {};

mkShell {
  buildInputs = [
    gcc
    nodejs_24
    typescript
    nodePackages.typescript-language-server
    nodePackages.vscode-langservers-extracted
    svelte-language-server
    python314
    pyright
    gnumake42
    openssl
    prisma-engines
  ];
  shellHook = ''
    export PRISMA_QUERY_ENGINE_LIBRARY=${pkgs.prisma-engines}/lib/libquery_engine.node
    export PRISMA_QUERY_ENGINE_BINARY=${pkgs.prisma-engines}/bin/query-engine
    export PRISMA_SCHEMA_ENGINE_BINARY=${pkgs.prisma-engines}/bin/schema-engine
    export PRISMA_INTROSPECTION_ENGINE_BINARY=${pkgs.prisma-engines}/bin/introspection-engine
  '';
}
