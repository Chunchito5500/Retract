
import type { ModelViewerElement } from '@google/model-viewer';
import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /** Now TS will treat `<model-viewer …>` as valid */
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<ModelViewerElement>,
        ModelViewerElement
      >;
    }
  }
}
