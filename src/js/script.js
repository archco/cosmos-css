import Cosmos from './cosmos.js';

const option = {
  sub_modules: {
    button: {
      close_style: 'icon',
    },
    toast: {
      log_enable: false,
    },
    scroll_to: {
      scroll_duration: 3000,
    },
  },
};

window.Cosmos = Cosmos;
const cosmos = new Cosmos(option);
window.cosmos = cosmos.init();
