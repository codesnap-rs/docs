# Quick-start Tutorial

This tutorial will guide you on how to use the library to convert a series of code files to code snapshot images.

### What We'll Build

We'll create a Rust project that reads multiple code files and generates a gallery of formatted code snapshots. 

## Getting Started

Ensure CodeSnap is installed. You can install the CLI for command line access or integrate it as a library in your project.

### Installation

#### Using Cargo

To install via Cargo:

```bash
cargo install codesnap-cli
```

Or, to add it as a library:

```bash
cargo add codesnap
```

### Setting Up the Environment

Set up a directory with the code files you want to convert into snapshots. Make sure these files are well-formatted.

## Building the Script

### Step 1: Initialize the Project

Create a new Rust project or add the following script to an existing one:

```rust
use codesnap::CodeSnap;
use codesnap::content::CodeBuilder;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let files = vec!["snippet1.rs", "snippet2.rs", "snippet3.rs"];
    for file in files {
        let code_content = std::fs::read_to_string(file)?;
        let content = CodeBuilder::new()
            .content(&code_content)
            .language("rust")
            .build()?;
        
        let snapshot = CodeSnap::from_default_theme()
            .content(content)
            .build()?
            .create_snapshot()?;
        
        snapshot.save_as(format!("{}.png", file))?;
        println!("Snapshot for {} created.", file);
    }
    Ok(())
}

```

### Step 2: Run the Code

Execute the script to produce snapshots for each code file in your directory:

```bash
cargo run
```

### Step 3: Review and Customize

The PNG files will appear in your project's root folder. 

## Advanced Customization

Customize your snapshots through configuration files. Here's how to apply a JSON configuration:

```rust
CodeSnap::from_config("custom_configuration")?;
```
You can view more details on our [Configuration page](configuration-and-examples).