# Introduction to CodeSnap

Welcome to CodeSnap! This is a Rust-based tool for creating beautiful code snapshots quickly. It uses a direct graphics engine, eliminating the need for network or browser-based rendering. You can use it from the command line with our CLI tool or incorporate it into your project via our library.

## Main Features

<!-- - **⚡ Fast**: Built with Rust for quick snapshot generation.
- **🖥️ CLI Tool**: Command-line interface for ease of use.
- **📚 Library**: Easily integrates into projects as a library.
- **🔢 Line Numbers**: Adds line numbers for better clarity.
- **💧 Watermark**: Customize snapshots with personal watermarks.
- **🎨 Themes**: Supports a variety of Sublime Text themes.
- **🔍 Scale**: Adjustable scale factors for high-quality snapshots.
- **🖼️ Custom Backgrounds**: Choose from solid or gradient backgrounds.
- **📁 Multiple Formats**: Save snapshots in PNG, SVG, or HTML.
- **📋 Clipboard Support**: Copy snapshots to and from the clipboard.
- **🏷️ Breadcrumbs**: Share snapshots with code paths for traceability. -->

### 🚀 Performance
- **Fast**: Built with Rust, CodeSnap efficiently generates snapshots using its graphics engine for swift operations.

### 📜 Versatility
- **CLI Tool**: Create snapshots directly from the command line with ease.
- **Library Integration**: Integrate CodeSnap into your projects to use its features within your development environment.

### 📐 Customization
- **Line Numbers**: Snapshots can include line numbers, helping to contextualize code snippets.
- **Watermarks**: Add custom watermarks to your snapshots for personalization.
- **Themes**: Supports Sublime Text syntax definitions, offering a variety of theme options.

### 🖼️ Flexibility
- **Scalability**: Adjust the scale factor for snapshots; high-quality outputs are the default.
- **Backgrounds**: Choose from default or custom background colors for visual enhancement.

### 📁 Formats & Clipboard
- **Snapshot Formats**: Save snapshots in formats like PNG, SVG, HTML, or ASCII.
- **Clipboard Integration**: Copy snapshots directly to or from the clipboard.

### 🎯 Breadcrumbs
- **Navigation**: Use CodeSnap's breadcrumb feature for easy attribution and code context sharing.

## Quick Start

### CLI Installation

CodeSnap can be installed on various platforms:

<details>
<summary>Arch Linux</summary>

```bash
pacman -S codesnap
```

</details>

<details>
<summary>Nix/NixOS</summary>

```bash
nix-env -i codesnap
```

</details>

<details>
<summary>Cargo</summary>

```bash
cargo install codesnap-cli
```

Or via precompiled binary:

```bash
cargo binstall codesnap-cli
```

</details>

<details>
<summary>Homebrew</summary>

```bash
brew install mistricky/tap/CodeSnap
```

</details>

View our [Getting Started](/getting-started) page for more information.

### Library Integration

Add CodeSnap to your Cargo project with:

```bash
cargo add codesnap
```

Build snapshots programmatically using:

```rust
let code_content = Content::Code(
  CodeBuilder::from_t
  .content(r#"print "Hello, World!""#)
  .language("python")
  .build()?,
);

let snapshot = CodeSnap::from_default_theme()
  .content(code_content)
  .build()?
  .create_snapshot()?;

// Copy the snapshot data to the clipboard
snapshot.raw_data()?.copy()
```

Explore more by visiting the [Getting Started](/getting-started) page.
