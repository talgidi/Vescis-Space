import React from 'react';
import './TFooter.css';

function ListItem(props) {
  // Correcto! No hay necesidad de especificar la key aquí:
  return <li>{props.value}</li>;
}

function TextList(props) {
  const texts = props.texts;
  const style = props.style;
  return (
	<ul>
	{texts.map((text) =>
        <ListItem key={text.toString()}
                  value={text} />
      )}
	</ul>
  );
}

export default TextList;