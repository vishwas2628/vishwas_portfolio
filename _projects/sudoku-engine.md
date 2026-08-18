---
layout: project
title: "Sudoku Logic Engine & Solver"
slug: sudoku-engine
category: "Algorithms & Systems"
date: 2024-05-12
featured: false
order: 8
status: "Completed"
github: "https://github.com/vishwas2628/sudokus"
demo: ""
tech_stack:
  - "Python"
  - "Backtracking"
  - "Algorithms"
  - "CLI"
summary: "Algorithmic Sudoku generator and solver capable of analyzing board entropy and solving 9x9 grids in sub-millisecond times."
---

## 🎯 Overview

A high-performance algorithmic solver and puzzle generator for 9x9 Sudoku matrices written in Python. It utilizes constraint satisfaction heuristics alongside optimized recursive backtracking.

---

## 🚀 Algorithm Details

* **Constraint Propagation**: Eliminates naked singles and row/column candidates before branching.
* **Minimum Remaining Values (MRV) Heuristic**: Chooses the most constrained cell first to prune the search space dramatically.
* **CLI Terminal Visualizer**: Colorized ASCII matrix output displaying solver step progressions.
