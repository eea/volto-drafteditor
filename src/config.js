import TextBlockEditWysiwyg from './Block/Edit';
import TextBlockViewWysiwyg from './Block/View';

export function applyConfig(config) {
  config.blocks.blocksConfig.wysiwyg = {
    id: 'wysiwyg',
    group: 'text',
    title: 'WYSIWYG',
    view: TextBlockViewWysiwyg,
    edit: TextBlockEditWysiwyg,
    icon: config.blocks.blocksConfig.text.icon,
  };
  return config;
}
