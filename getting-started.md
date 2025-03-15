# Getting Started

Welcome to the "Getting Started" guide for CodeSnap! 🎉 This page will help you get started with CodeSnap, whether you want to use it as a Command Line Interface (CLI) tool or integrate it as a library into your own projects.

## Installation

### CLI Tool

CodeSnap can be installed using various methods depending on your system:

- **Arch Linux**: Use the command:
  ```bash
  pacman -S codesnap
  ```

- **Nix/NixOS**: Install with:
  ```bash
  nix-env -i codesnap
  ```

- **Cargo**: Run the following command:
  ```bash
  cargo install codesnap-cli
  ```

  Alternatively, use the precompiled binary:
  ```bash
  cargo binstall codesnap-cli
  ```

- **Homebrew**: Use:
  ```bash
  brew install mistricky/tap/CodeSnap
  ```

After installation, you can generate code snapshots with:

```bash
codesnap -f ./code_snippet.rs -o "./output.png"
```

Use `codesnap -h` for more options and information.

### Library Integration

To add CodeSnap to your Rust project, include it as a dependency via Cargo:

```bash
cargo add codesnap
```

Use CodeSnap's builder pattern to create snapshots:

```rust
let code_content = Content::Code(
  CodeBuilder::from_text()
  .content(r#"print "Hello, World!""#)
  .language("python")
  .build()?,
);

let snapshot = CodeSnap::from_default_theme()
  .content(code_content)
  .build()?
  .create_snapshot()?;
```

Check out CodeSnap's examples repository for more detailed usage scenarios. Enjoy creating your code snapshots! 🖼️