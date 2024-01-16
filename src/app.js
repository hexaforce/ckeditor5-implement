/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import React, { useState } from "react";
import ConfigurationDialog from "./configuration-dialog";
import Sample from "./sample";

const App = () => {
  const [configuration, setConfiguration] = useState(null);

  // Configuration data needed to initialize the editor is available only after the configuration dialog
  // is submitted, hence the editor is initialized after ConfigurationDialog returns the configuration.
  if (!configuration) {
    return (
      <ConfigurationDialog
        onSubmit={(config) => setConfiguration(config)}
      />
    );
  }

  return <Sample configuration={configuration} />;
};

export default App;