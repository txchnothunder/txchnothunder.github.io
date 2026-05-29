---
layout: page
title: Rubik's Cube RL Solver
description: Reinforcement learning and hybrid search for solving the 3×3 Rubik's Cube across 4.3 × 10¹⁹ possible states.
img: assets/img/12.jpg
importance: 1
category: work
---

## Overview

This project explores reinforcement learning and hybrid algorithmic approaches for solving the 3×3 Rubik's Cube — a combinatorial problem with **4.3 × 10¹⁹** possible states and a God's Number of 20 moves.

Built originally as a group project for CS 273P at UC Irvine (Fall 2025), then significantly extended post-course with an improved solver architecture.

## Approach

**Policy Iteration (RL baseline):** Trains a state-value function over randomly scrambled cubes. Reward is proportional to sticker-level correctness (+100 for a full solve, −1 per move).

**Hybrid Solver (improved, post-course):** Three-phase solver with no iteration cap:
- *Phase 1 — IDDFS:* Optimal for short scrambles (≤7 moves), O(depth) memory
- *Phase 2 — Beam Search:* Explores top-200 states per depth; handles medium scrambles the RL baseline completely fails on
- *Phase 3 — Greedy restarts + macros:* Applies known algorithms (sexy move, sune, T-perm) to escape local minima; restarts from best-known state until time limit

## Results

| Scramble depth | RL Baseline | Hybrid Solver |
|---|---|---|
| 1–3 moves | ~20% | ~100% |
| 4–6 moves | ~10% | ~95% |
| 7–10 moves | ~2% | ~70% |
| 11–15 moves | ~0% | ~40% |

Overall: from ~26.9% to **88%** on 1–10 move scrambles.

## Stack

Python · NumPy · Matplotlib · Custom cube environment

[GitHub Repository](https://github.com/txchnothunder/rl-cubed)
