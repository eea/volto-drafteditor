import PropTypes from 'prop-types';
import React from 'react';
import redraft from 'redraft';
import { settings } from '~/config';



const View = ({ data }) => {
  let text = data.text;
  let result;
  let result2;

  const atomicBlocks = () => {
    IMAGE: children => <figure>{children}</figure>
  }
  
  const entities = {
    // IMAGE: (children, data) => <img src={data.src} />
    IMAGE: (children, entity, { key }) => (
      <img key={key} src={entity.src} alt={entity.alt} />
    ),
  }


  console.log({
    entities: {
      ...settings.ToHTMLRenderers.entities,
      ...entities,
    }
  })
  const newToHTMLRenderers = {
    ...settings.ToHTMLRenderers,
    entities: {
      ...settings.ToHTMLRenderers.entities,
      // ...entities
    }
  }
  

  if (typeof text === 'string') {
    console.log('isString')
    // TODO: need better regexp here
    text = text.replace(/(<? *script)/gi, 'illegalscript');

    result = (
      <div
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />

    );
  } else {
    console.log('----',text)
    result = redraft(text, {entities: settings.ToHTMLRenderers.entities, inline: settings.ToHTMLRenderers.inline, blocks: settings.ToHTMLRenderers.blocks}, settings.ToHTMLOptions);
  }
  return text ? result : '';
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default View;
