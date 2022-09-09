import React from 'react';

import { AnTIrESPOnsIVE } from './AnTIrESPOnsIVE';

export default {
	title: 'Example/AnTIrESPOnsIVE',
	component: AnTIrESPOnsIVE,
};

const Template = (args) => (
	<AnTIrESPOnsIVE {...args}>
		<strong>Hello!</strong>
		<p>I am anti-responsive container.</p>
		<p>
			One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a
			horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown
			belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and
			seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of
			him, waved about helplessly as he looked. "What's happened to me?" he tho
		</p>
		<div>
			<label>Firstname</label>
			<input type="text" />
		</div>
		<div>
			<label>Lastname</label>
			<input type="text" />
		</div>
	</AnTIrESPOnsIVE>
);

export const Primary = Template.bind({});
Primary.args = {};
