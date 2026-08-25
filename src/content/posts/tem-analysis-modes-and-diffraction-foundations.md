---
title: TEM / STEM 分析模式与衍射基础
author: ChatGPT
description: 从傅里叶空间、成像、衍射与能谱出发，系统梳理 TEM 和 STEM 的常见分析模式。
pubDate: 2026-08-14
tags:
  - tem
  - microscopy
---

_A readable, logically structured and scientifically grounded guide_

> **Math rendering:** This file uses standard LaTeX delimiters: `$...$` for inline equations and `$$...$$` for display equations. For best results, open it in a Markdown renderer with MathJax/KaTeX support (for example Obsidian, Typora, Jupyter, or VS Code with a Markdown math extension).

This document organizes the main concepts and common operating modes of transmission electron microscopy into one scientific framework. A modern (S)TEM does not simply “take pictures”: it changes illumination, specimen orientation, scattering-angle selection, or energy selection in order to extract different information from the same electron–matter interaction.

---

## 1. A unified framework for TEM analysis

A practical way to understand TEM is to organize every experiment around three information domains:

- **Real-space structure** — grains, interfaces, defects, precipitates and atomic columns.
- **Reciprocal-space structure** — lattice periodicities, phase, crystallographic orientation and strain.
- **Chemical/electronic structure** — elemental composition, bonding, coordination and valence state.

TEM and STEM are therefore not isolated techniques. They are two illumination/detection geometries that can be combined with diffraction and spectroscopy.

| Information domain | Typical methods                              | Primary question                                                 |
| ------------------ | -------------------------------------------- | ---------------------------------------------------------------- |
| Real space         | BF-TEM, DF-TEM, HRTEM, BF/ADF/HAADF/ABF-STEM | What structural features are present and where are they?         |
| Reciprocal space   | SAED, NBED, CBED, 4D-STEM                    | What are the phase, orientation, lattice periodicity and strain? |
| Energy / chemistry | EDS/EDX, EELS, EFTEM                         | Which elements and electronic/chemical states are present?       |

---

## 2. Why diffraction is a Fourier-space measurement

The key conceptual bridge is the **Fourier transform**. A spatially varying object can be described either in real space or as a superposition of spatial-frequency components. In crystallography those spatial frequencies are represented by reciprocal-lattice vectors.

$$
f(\mathbf{r}) \longleftrightarrow F(\mathbf{q}) = \int f(\mathbf{r}) e^{-i\mathbf{q}\cdot\mathbf{r}}\, d\mathbf{r}
$$

For a periodic crystal potential $V(\mathbf r)$, the Fourier components occur at reciprocal-lattice vectors $\mathbf g$:

$$
V(\mathbf{r}) = \sum_{\mathbf{g}} V_{\mathbf{g}} e^{i\mathbf{g}\cdot\mathbf{r}}
$$

A reciprocal-lattice vector $\mathbf g$ is therefore a **spatial-frequency vector**. Its direction is normal to the corresponding lattice planes and its magnitude is inversely related to plane spacing:

$$
\left|\mathbf{g}_{hkl}\right| = \frac{1}{d_{hkl}}
$$

Under kinematical and far-field approximations, the scattering amplitude is proportional to the Fourier transform of the specimen scattering potential, while an ordinary detector records intensity:

$$
A(\mathbf{q}) \propto \mathcal{F}\!\left\{V(\mathbf{r})\right\}, \qquad I(\mathbf{q}) = \left|A(\mathbf{q})\right|^2
$$

Thus the statement **“diffraction is a Fourier transform”** captures the central physics, provided its limits are remembered. In real TEM specimens, multiple **dynamical scattering** can strongly modify intensities even though reciprocal-lattice geometry still determines reflection positions.

---

## 3. g-vectors, Bragg scattering and the Ewald sphere

The scattering vector is the change in electron wavevector:

$$
\mathbf{q} = \mathbf{k}_f - \mathbf{k}_i
$$

For coherent crystal diffraction, $\mathbf q$ corresponds to a reciprocal-lattice vector $\mathbf g$. Elastic scattering additionally requires:

$$
\left|\mathbf{k}_f\right| = \left|\mathbf{k}_i\right| = \frac{1}{\lambda}
$$

The **Ewald sphere** is a geometric construction of this elastic-scattering condition. It answers:

> For a fixed electron wavelength, incident-beam direction and specimen orientation, which reciprocal-lattice points are excited?

Because TEM electrons have very short wavelengths, the Ewald sphere is extremely large relative to typical reciprocal-lattice spacings. Over the reciprocal-space region normally observed, its surface is almost flat. This is one reason many reflections can be excited simultaneously near a low-index zone axis.

### Why tilt the specimen?

Tilting the specimen does **not** create diffraction. Tilting rotates the real lattice and therefore the reciprocal lattice relative to the beam and Ewald sphere, changing which $\mathbf g$-vectors satisfy or approach the diffraction condition.

A **two-beam condition** is obtained by tilting so that the transmitted beam and one selected diffracted beam dominate. This simplifies diffraction-contrast analysis of defects.

---

## 4. TEM and STEM: two illumination geometries

| Feature         | TEM                                                | STEM                                                     |
| --------------- | -------------------------------------------------- | -------------------------------------------------------- |
| Illumination    | Broad, often near-parallel illuminated area        | Convergent focused probe scanned point-by-point          |
| Image formation | Post-specimen lenses form the image simultaneously | Each probe position supplies one image coordinate        |
| Common outputs  | BF/DF, HRTEM, SAED                                 | BF/ADF/HAADF/ABF, EDS/EELS, 4D-STEM                      |
| Strength        | Diffraction contrast and conventional imaging      | Localized analytical and detector-angle-resolved imaging |

Modern instruments routinely support both TEM and STEM, and the appropriate choice depends on the scientific question.

---

## 5. Conventional TEM imaging modes

### 5.1 Bright-field TEM (BF-TEM)

Bright-field TEM forms an image predominantly from the transmitted $000$ beam selected by the objective aperture. Regions that strongly scatter electrons away from the transmitted beam often become darker.

Typical uses:

- grains;
- dislocations;
- interfaces;
- precipitates;
- foil-thickness variations;
- diffraction-contrast imaging.

Important points:

- Contrast can include **diffraction contrast**, **mass-thickness contrast**, and at high resolution **phase contrast**.
- Image brightness should not automatically be interpreted as composition.
- Contrast often changes strongly with specimen tilt and excitation error.

---

### 5.2 Dark-field TEM (DF-TEM)

Dark-field TEM selects a **diffracted beam** rather than the transmitted beam. Regions producing the chosen reflection become bright against a dark background.

Typical uses:

- highlighting a specific phase;
- selecting one orientation;
- visualizing precipitates;
- stacking faults;
- defect contrast.

A practical sequence is:

1. acquire a diffraction pattern;
2. choose a reflection $\mathbf g$;
3. position the objective aperture over that reflection;
4. return to image mode;
5. record the DF image.

BF and DF are therefore complementary selections of the same diffraction field.

---

### 5.3 High-resolution TEM (HRTEM)

HRTEM relies on coherent interference of the transmitted and diffracted beams and therefore produces **phase contrast**.

The image is not a simple direct projection of atomic positions. Contrast depends on:

- specimen thickness;
- defocus;
- aberrations;
- crystal orientation;
- contrast-transfer function.

HRTEM is powerful for lattice structure, interfaces and defects, but quantitative structural interpretation often requires image simulation.

---

## 6. Electron diffraction modes

### 6.1 Selected-area electron diffraction (SAED)

SAED records the diffraction pattern from a selected specimen region.

Two apertures are often confused:

| Aperture               | Conceptual plane                         | Primary purpose                                    |
| ---------------------- | ---------------------------------------- | -------------------------------------------------- |
| Selected-area aperture | Real-space / image-conjugate selection   | Choose which specimen region contributes to SAED   |
| Objective aperture     | Objective back-focal / diffraction plane | Choose transmitted or diffracted beams for imaging |

SAED provides:

- reciprocal-lattice geometry;
- $d$-spacings;
- interspot angles;
- zone-axis information;
- phase constraints;
- orientation constraints.

A parallel incident beam can still diffract because the crystal coherently scatters electrons into distinct exit directions.

Specimen tilt rotates the reciprocal lattice relative to the Ewald sphere and changes which reflections are excited.

---

### 6.2 CBED and NBED

**CBED — Convergent-Beam Electron Diffraction**

A convergent probe is used, so each reflection becomes a **disk** rather than an ideal spot.

The intensity structure inside CBED disks can contain information about:

- symmetry;
- thickness;
- dynamical diffraction;
- local crystal structure.

**NBED — Nanobeam Electron Diffraction**

NBED uses a small probe for localized diffraction.

Conceptually:

- SAED emphasizes reciprocal-space sharpness over a relatively larger area.
- NBED/CBED emphasize spatial localization.

---

### 6.3 4D-STEM

In conventional STEM, a detector integrates electrons over a chosen angular range and gives one intensity value per probe position.

In **4D-STEM**, a pixelated detector records a full two-dimensional diffraction pattern at every two-dimensional scan coordinate:

$$
I = I(x,y,q_x,q_y)
$$

This allows the same dataset to produce:

- virtual BF;
- virtual ADF;
- center-of-mass analysis;
- DPC;
- phase mapping;
- orientation mapping;
- strain mapping;
- ptychographic reconstruction.

A typical crystallographic 4D-STEM pipeline is:

1. calibrate beam center, reciprocal-space scale and distortion;
2. detect Bragg disks/peaks;
3. represent them as local $\mathbf g$-vectors;
4. compare experimental reciprocal-space geometry with simulated candidate phases/orientations;
5. determine phase and orientation;
6. quantify strain if a suitable reference and calibration are available.

---

## 7. STEM detector modes

### 7.1 BF-STEM

BF-STEM collects electrons near the forward/central angular region.

It is conceptually related to bright-field selection, but its contrast transfer differs from conventional BF-TEM because the probe and detector geometries are different.

---

### 7.2 ADF and LAADF-STEM

**ADF — Annular Dark Field**

ADF-STEM collects electrons over an annular angular range.

At relatively low-to-medium scattering angles, the image can retain strong:

- diffraction contrast;
- strain sensitivity;
- thickness sensitivity.

**LAADF** is therefore useful when diffraction-related contrast is desired.

---

### 7.3 HAADF-STEM

**HAADF — High-Angle Annular Dark Field**

HAADF-STEM integrates electrons scattered to relatively high angles.

Under suitable conditions, the intensity increases approximately monotonically with atomic number, giving the familiar **Z-contrast** interpretation.

Typical uses:

- atomic-column imaging;
- interfaces;
- precipitates;
- heavy-element segregation;
- composition-sensitive imaging.

Important caveat:

$$
I_{\mathrm{HAADF}} \neq \text{a universal direct map of } Z
$$

Intensity also depends on:

- thickness;
- channeling;
- detector angles;
- specimen orientation;
- probe conditions;
- aberrations.

Quantitative composition from HAADF generally requires calibration and/or simulation.

---

### 7.4 ABF-STEM

**ABF — Annular Bright Field**

ABF-STEM collects a low-angle annular region within or near the bright-field disk.

It is often used to improve sensitivity to **light-element columns** that may be weak in HAADF.

Common applications include locating:

- O;
- N;
- Li;
- other light elements.

Simultaneous **HAADF + ABF** is useful in structures containing both heavy and light sublattices.

---

## 8. Chemical and electronic spectroscopy

### 8.1 Energy-dispersive X-ray spectroscopy (EDS/EDX)

EDS detects characteristic X-rays emitted when the electron beam ionizes an inner-shell atomic state and a higher-energy electron fills the vacancy.

The emitted X-ray energy identifies the element.

Typical modes:

- **Point spectrum** — identify elements locally.
- **Line scan** — follow composition across a boundary/interface.
- **Spectrum image / map** — reconstruct elemental distributions.

Typical strengths:

- intuitive elemental identification;
- convenient mapping in STEM;
- especially useful for medium/heavy elements.

Important limitations include:

- absorption;
- fluorescence;
- peak overlap;
- detector geometry;
- specimen thickness.

---

### 8.2 Electron energy-loss spectroscopy (EELS)

EELS measures the energy distribution of electrons after they transmit through a thin specimen.

A typical EELS spectrum contains:

| Spectral region | Physical information                | Typical use                                         |
| --------------- | ----------------------------------- | --------------------------------------------------- |
| Zero-loss peak  | Elastic / near-zero-loss electrons  | Energy reference, thickness, zero-loss filtering    |
| Low-loss        | Plasmons and dielectric excitations | Thickness and dielectric/optical response           |
| Core-loss edges | Inner-shell electronic excitation   | Elements, bonding, coordination and oxidation state |

EELS is particularly powerful for:

- light elements;
- oxidation state;
- bonding;
- coordination;
- dielectric response;
- electronic structure.

Interpretation depends strongly on:

- energy resolution;
- thickness;
- collection geometry;
- plural scattering;
- beam damage.

---

### 8.3 EFTEM

**EFTEM — Energy-Filtered TEM**

EFTEM forms images using electrons from a selected energy-loss window.

It can therefore be understood as:

$$
\text{TEM imaging} + \text{energy selection}
$$

Applications include:

- zero-loss filtered imaging;
- elemental maps;
- plasmon imaging;
- thickness-related contrast.

---

## 9. What common microscope controls actually do

Most operating controls can be understood as changing one of four things:

1. illumination;
2. specimen position/orientation;
3. angular/reciprocal-space selection;
4. imaging/detection conditions.

| Control / operation            | Main physical effect                                                       | Typical reason                                       |
| ------------------------------ | -------------------------------------------------------------------------- | ---------------------------------------------------- |
| Intensity / condenser lens     | Changes illumination convergence and/or illuminated area depending on mode | Set beam condition and dose                          |
| Spot size / gun-lens condition | Changes source demagnification and probe current                           | Trade current, coherence and probe properties        |
| Condenser aperture             | Restricts incident angular range and current                               | Control convergence and beam current                 |
| Beam shift                     | Moves beam laterally                                                       | Center illumination without moving specimen          |
| Beam tilt                      | Changes incident direction                                                 | Optical alignment and diffraction adjustments        |
| Stage X/Y                      | Translates specimen                                                        | Navigate to region of interest                       |
| alpha/beta stage tilt          | Rotates specimen orientation                                               | Find zone axis, systematic row or two-beam condition |
| Focus                          | Changes objective imaging condition                                        | Set focus/defocus                                    |
| Stigmation                     | Compensates astigmatism                                                    | Restore symmetric image/probe transfer               |
| Objective aperture             | Selects diffraction angles/beams                                           | BF/DF and diffraction-contrast control               |
| Selected-area aperture         | Selects real-space specimen region                                         | Localize SAED                                        |
| Camera length                  | Changes diffraction-pattern magnification / reciprocal-space scale         | Adjust diffraction pattern size/calibration          |
| TEM ↔ diffraction              | Changes projector-lens conjugate plane                                     | Switch image plane and diffraction plane             |
| TEM ↔ STEM                     | Changes illumination, scanning and detection geometry                      | Switch broad-beam imaging and focused-probe analysis |

Exact behavior varies with microscope model, so the local manufacturer/facility SOP should always take precedence for actual operation.

---

## 10. Method-selection decision guide

| Scientific question                             | Good starting method            | Common follow-up                      |
| ----------------------------------------------- | ------------------------------- | ------------------------------------- |
| Where are grains, defects or precipitates?      | BF-TEM / low-mag TEM            | DF-TEM or STEM                        |
| Which region produces a chosen reflection?      | SAED + DF-TEM                   | Two-beam diffraction contrast         |
| What is the phase or orientation?               | SAED / NBED / 4D-STEM           | Indexing or tilt-series analysis      |
| Where are heavy elements or atomic columns?     | HAADF-STEM                      | EDS or EELS                           |
| Where are light-element columns?                | ABF-STEM / phase-sensitive STEM | EELS where appropriate                |
| Which elements are present?                     | STEM-EDS                        | EELS for complementary information    |
| What are bonding or oxidation states?           | EELS                            | Combine with HAADF/EDS                |
| What is local strain/orientation over a map?    | 4D-STEM / NBED                  | Bragg-vector calibration and indexing |
| What is the atomic interface/lattice structure? | HRTEM or atomic-resolution STEM | Simulation + spectroscopy             |

---

## 11. The conceptual chain to remember

A compact way to connect the physics and the operations is:

$$
\text{Real crystal} \rightarrow V(\mathbf{r})
$$

$$
V(\mathbf{r}) \xrightarrow{\text{Fourier transform}} V_{\mathbf{g}},\;\mathbf{g}_{hkl}
$$

$$
\mathbf{g} + \mathbf{k}_i + \text{Ewald condition} \rightarrow \text{excited diffraction beams}
$$

$$
\text{lens/aperture/detector selection} \rightarrow \text{BF, DF, SAED, STEM contrast}
$$

$$
\text{energy-resolved detection} \rightarrow \text{EDS, EELS, EFTEM}
$$

$$
\text{full diffraction pattern at every probe position} \rightarrow \text{4D-STEM}
$$

Almost every TEM operation can therefore be interpreted as one of four actions:

- change illumination;
- translate/rotate the specimen;
- select scattering angle or reciprocal-space information;
- select energy.

This framework is more transferable than memorizing microscope buttons individually.

---

## 12. Important scientific caveats

- Electron diffraction in TEM is frequently **dynamical**; diffraction intensities are not generally equal to simple kinematical $|F_g|^2$ values.
- Bright/dark contrast in TEM or STEM is not uniquely compositional; thickness, orientation, diffraction condition and detector geometry must be considered.
- HAADF is often called **Z-contrast**, but quantitative intensity depends on more than atomic number.
- HRTEM is **phase contrast** and may reverse with defocus or thickness; atomic-resolution images should not automatically be read as literal atom maps.
- EDS and EELS are complementary rather than interchangeable or universally superior.
- Quantitative 4D-STEM requires accurate beam-center, reciprocal-space scale and distortion calibration.
- Exact lens conventions and operating sequences vary between microscope models and facilities; the local SOP should govern actual instrument operation.

---

## References and further reading

1. JEOL. **“Dark-field image”**, Glossary of TEM Terms.
2. Thermo Fisher Scientific. **Transmission Electron Microscopy Techniques | Material Analysis**.
3. Thermo Fisher Scientific. **4D STEM imaging using an Electron Microscope Pixel Array Detector (EMPAD)**, application note.
4. JEOL. **Low-angle annular dark-field scanning transmission electron microscopy (LAADF-STEM)**, Glossary of TEM Terms.
5. JEOL. **High-angle annular dark-field scanning transmission electron microscopy (HAADF-STEM)**, Glossary of TEM Terms.
6. Thermo Fisher Scientific. Materials-science (S)TEM resources on integrated STEM and EDS workflows.
7. Gatan. **EELS and EFTEM**.
8. Gatan. **Techniques — EELS/EFTEM**.
