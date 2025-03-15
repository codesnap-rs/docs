# Configuration and Examples

This documentation provides a guide for setting up CodeSnap with JSON configurations and includes examples for practical use.

## ⚙️ Configuration

CodeSnap is customizable using JSON configurations so you can personalize snapshots with themes, backgrounds, watermarks, and more.

### Library Configuration

To integrate CodeSnap as a library, use the `CodeSnap::from_config` method:

```rust
CodeSnap::from_config("Your config")?;
```

### CLI Configuration

For CLI users, CodeSnap will create a default configuration file at `~/.config/CodeSnap`. You can personalize it as needed:

```jsonc
{
  "theme": "candy",
  "window": {
    "mac_window_bar": true,
    "shadow": {
      "radius": 20,
      "color": "#00000040"
    }
  },
  "code_config": {
    "font_family": "CaskaydiaCove Nerd Font"
  },
  "watermark": {
    "content": "CodeSnap"
  },
  "background": {
    "start": { "x": 0, "y": 0 },
    "end": { "x": "max", "y": 0 },
    "stops": [
      { "position": 0, "color": "#6bcba5" },
      { "position": 1, "color": "#caf4c2" }
    ]
  }
}
```

For more configuration options, see [config.rs](https://github.com/mistricky/CodeSnap/blob/main/core/src/config.rs).

## 🌰 Examples

Here are some example use cases for CodeSnap. More can be found in the [examples](https://github.com/mistricky/CodeSnap/tree/main/cli/examples) directory.

### CLI Usage

```bash
# Generate a snapshot from a Haskell file
codesnap -f ./code_snippet.hs -o "./output.png"
```

### Using the Library

```rust
let snapshot = CodeSnap::from_default_theme()
  .content(Content::Code(
    CodeBuilder::from_t.content(r#"print "Hello, World!""#)
    .language("python")
    .build()?,
  ))
  .build()?
  .create_snapshot()?;

// Copy to clipboard 
snapshot.raw_data()?.copy()
```

With these configurations and examples, you can efficiently create personalized code snapshots. 🔧✨