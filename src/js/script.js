import Cosmos from './cosmos.js';

const option = {
  sub_modules: {
    button: {
      close_style: 'icon',
    },
    toast: {
      log_enable: true,
      container_position: 'middle-right',
      close_type: 'hide',
    },
    scroll_to: {
      scroll_duration: 600,
    },
  },
};

window.Cosmos = Cosmos;
window.cosmos = new Cosmos(option).init();
