+++
title = "Plottini"
slug = "plottini"
type = "docs"

[[cascade]]
type = "docs"
+++

Plottini is a graph builder for creating publication-quality plots from TSV data without writing plotting code.

It combines a Streamlit-based interface with a desktop wrapper and matplotlib rendering, so researchers and technical users can go from raw tabular data to export-ready figures quickly.

## Who it is for

Plottini is designed for researchers, scientists, students, and engineers who want precise control over charts without rebuilding plotting logic for every dataset.

## What you can do

- Load one or more TSV files with configurable headers and comment delimiters
- Build line, scatter, bar, histogram, pie, polar, box, violin, area, and other plot types
- Apply transformations such as log, sqrt, power, and trigonometric functions
- Define derived columns with safe mathematical expressions
- Filter rows by value ranges before plotting
- Align multiple files by a common column and overlay series
- Use secondary Y-axis and configure layout, labels, legends, and grid
- Preview changes live while tuning the figure

## Export options

- PNG, SVG, PDF, and EPS output
- Configurable DPI for high-resolution raster export
- Vector output for publication and presentation workflows

## Technical stack

- Python 3.10+
- Streamlit for interactive UI
- PyWebView for desktop packaging
- matplotlib for rendering
- NumPy and Click for computation and CLI ergonomics

## Quick start

```bash
pip install plottini
plottini
```

## Project links

- [Repository](https://github.com/lanthoor/plottini)
- [Issues](https://github.com/lanthoor/plottini/issues)
