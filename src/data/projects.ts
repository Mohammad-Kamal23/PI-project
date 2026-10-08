import { paper, repo } from './site';
import type { Project } from './types';

// Add a project = add one entry. `featured` projects get the large cards; the rest are listed below them.
export const projects: Project[] = [
  {
    slug: 'apex',
    title: 'APEX',
    tagline: 'Selective prediction for frozen medical image classifiers',
    kind: 'Research',
    status: 'Work in progress',
    year: '2026',
    featured: true,
    summary:
      'A post-hoc layer for frozen image classifiers. It combines the network’s features with image descriptors in three ' +
      'kernel experts and mixes their output with the softmax through a confidence gate. The backbone is not retrained.',
    highlights: [
      '18 configurations: 6 medical imaging datasets × 3 backbones (ViT, ConvNeXt, MobileNetV3), 5-fold cross-validation',
      'AURC −44.3% and balanced accuracy +4.18 points against the base model',
      'Brier, NLL and AURC improve in 18 of 18 configurations against all six baselines (Wilcoxon p = 7.6 × 10⁻⁶)',
      'The repository includes the predictions and a script that recomputes the paper’s tables',
    ],
    metrics: [
      { value: '−44.3%', label: 'AURC' },
      { value: '+4.18', label: 'balanced accuracy, points' },
      { value: '18 / 18', label: 'configurations improved' },
    ],
    stack: ['Python', 'scikit-learn', 'PyTorch', 'timm', 'SciPy'],
    links: [
      { label: 'Code', href: repo('apex-selective-prediction') },
      { label: 'Draft paper (PDF)', href: paper('APEX_paper.pdf') },
    ],
    details: [
      {
        heading: 'Method',
        paragraphs: [
          'APEX takes the penultimate features of a frozen network, adds 62 image descriptors and projects both to 64 ' +
            'dimensions. RBF-SVM, cubic-SVM and k-NN experts are fitted there. A gate mixes the experts with the softmax: ' +
            'the lower the softmax confidence, the more weight the experts get.',
        ],
      },
      {
        heading: 'Evaluation',
        bullets: [
          'All 33,588 images were hashed and checked before training; 1,337 leaking or mislabelled files were set aside',
          'The 90 held-out prediction files are in the repository, so the tables can be recomputed',
          'Calibration error is not better than the parametric calibrators; the paper reports this',
        ],
      },
      {
        heading: 'Context',
        paragraphs: [
          'Prepared for the IEEE CIS Jordan AI Research Contest (Track A), with Dr. Rizik Al-Sayyed, University of Jordan. ' +
            'The paper is a work in progress and not yet published.',
        ],
      },
    ],
  },
  {
    slug: 'gislc',
    title: 'GISLC',
    tagline: 'Gated-Inception model for skin lesion classification',
    kind: 'Publication',
    status: 'Electronics (MDPI), 2026',
    year: '2026',
    featured: true,
    summary:
      'A frozen GoogLeNet (Inception-V1) backbone with a ConvLSTM-style gating head. The head weights each Inception ' +
      'branch at every location instead of concatenating the branches.',
    highlights: [
      '98.23% accuracy and 98.23% macro-F1 on the MASLD clinical-image subset (nine lesion classes)',
      'Grad-CAM maps focus on the lesion border and texture rather than hair, rulers or skin markers',
      'Co-author: co-designed the gated-fusion architecture and its spatial gating',
    ],
    metrics: [
      { value: '98.23%', label: 'accuracy (Inception baseline: 82.73%)' },
      { value: '98.23%', label: 'macro-F1' },
    ],
    stack: ['Python', 'TensorFlow', 'CNN', 'ConvLSTM gating', 'Grad-CAM'],
    links: [{ label: 'Paper', href: 'https://www.mdpi.com/2079-9292/15/4/861' }],
    details: [
      {
        heading: 'Gated fusion',
        paragraphs: [
          'A GateCell2D module controls each multi-scale branch per pixel: input gates pass lesion features, forget gates ' +
            'suppress artefacts such as hair and ruler lines.',
        ],
      },
      {
        heading: 'Publication',
        paragraphs: [
          'T. Alsarhan, M. K. Abdulaziz, et al., “GISLC: Gated-Inception Model for Skin Lesion Classification,” ' +
            'Electronics, vol. 15, no. 4, art. 861, Feb. 2026.',
        ],
      },
    ],
  },
  {
    slug: 'cropeye',
    title: 'CropEye',
    tagline: 'Tomato-leaf pest detection: Flutter app + AI backend',
    kind: 'Product',
    status: 'Under development · backend offline',
    year: '2025–2026',
    featured: true,
    summary:
      'A mobile app for tomato leaves, mainly the tomato leafminer (Tuta absoluta). YOLOv8 finds the leaves, ' +
      'ShuffleNetV2 grades the damage and Gemini gives advice in Arabic or English.',
    highlights: [
      'Flutter app with Firebase sign-in, live camera detection and an offline mode',
      'FastAPI + ONNX Runtime backend for Google Cloud Run (GPU); results smoothed across frames',
      'Backend address set at build time; debug routes hidden on public servers',
    ],
    stack: ['Flutter', 'FastAPI', 'ONNX Runtime', 'YOLOv8', 'ShuffleNetV2', 'Gemini', 'Firebase'],
    links: [{ label: 'Code', href: repo('CropEye') }],
    details: [
      {
        heading: 'Roadmap',
        bullets: [
          'Bring the backend back online',
          'Offline scanning that syncs when the phone is back online',
          'Geotagged scans to map pest spread across a farm',
          'Later: field rovers that act on the detections (see Concepts)',
        ],
      },
    ],
  },
  {
    slug: 'document-stamping',
    title: 'Automated document stamping',
    tagline: 'n8n workflow + vision AI that signs and stamps PDFs',
    kind: 'Open source',
    status: 'Open source',
    year: '2026',
    featured: true,
    summary:
      'An n8n workflow that signs and stamps PDFs placed in a shared folder. OpenCV template matching (and optionally ' +
      'Florence-2) finds the signature and stamp areas in English and Arabic documents. Overlapping boxes are ' +
      'merged so nothing is stamped twice; a document with no area gets an extra audit page.',
    highlights: [
      'Docker stack: n8n, FastAPI, a Streamlit UI and an SQL audit log',
      'Manual click-to-place mode next to the automatic mode',
      'PDF validation, SHA-256 hash and metadata removal for every document',
    ],
    stack: ['n8n', 'FastAPI', 'OpenCV', 'Florence-2', 'PyMuPDF', 'Docker', 'SQL'],
    links: [{ label: 'Code', href: repo('n8n-sign-project') }],
  },
  {
    slug: 'ensemble-analytics',
    title: 'Ensemble analytics',
    tagline: 'Text classification and tabular ensembles',
    kind: 'Coursework',
    status: 'Coursework',
    year: '2025',
    summary:
      'Two coursework pipelines: an NLP model for fake-news detection and a stacked XGBoost / CatBoost model for ' +
      'heart-disease prediction.',
    highlights: [],
    stack: ['scikit-learn', 'XGBoost', 'CatBoost', 'NLP'],
    links: [],
  },
];
