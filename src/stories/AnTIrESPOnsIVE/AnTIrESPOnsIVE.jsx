import React from 'react';
import './AnTIrESPOnsIVE.css';

export const AnTIrESPOnsIVE = ({ clean, children }) => {
	return <div className={`AnTIrESPOnsIVE ${clean ? 'clean' : ''}`}>{children}</div>;
};
