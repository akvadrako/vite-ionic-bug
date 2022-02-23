import './style.css'

import { initialize } from "@ionic/core/components";
import { applyPolyfills, defineCustomElements } from "@ionic/core/loader"

async function init() {
    console.log('INIT')
    await initialize();
    await applyPolyfills();
    await defineCustomElements();
    console.log('DONE')
}

init()


