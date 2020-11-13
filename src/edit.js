/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { Fragment, useState } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, FormToggle, PanelRow } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */
function Edit(props) {
	const [ accordionItem, setaccordionItem ] = useState([
		{
			id: Math.floor(Math.random() * 1000),
			title: 'Hello World',
			description: `Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci
			luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
			ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
			Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero
			malesuada feugiat`,
			isActive: false
		},

		{
			id: Math.floor(Math.random() * 1000),
			title: 'Hello World',
			description: `Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci
			luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
			ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
			Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero
			malesuada feugiat`,
			isActive: false

		},

		{
			id: Math.floor(Math.random() * 1000),
			title: 'Hello World',
			description: `Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci
			luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
			ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
			Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero
			malesuada feugiat`,
			isActive: false

		},

		{
			id: Math.floor(Math.random() * 1000),
			title: 'Hello World',
			description: `Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci
			luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
			ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
			Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero
			malesuada feugiat`,
			isActive: false

		},

		{
			id: Math.floor(Math.random() * 1000),
			title: 'Hello World',
			description: `Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci
			luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
			ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
			Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero
			malesuada feugiat`,
			isActive: false

		}
	]);

	const openOne = true;

	const classToggleItem = (id) => {
		const newAccordionList = accordionItem.map( accordion => {

			if (!openOne && accordion.id === id) {

				return {
					...accordion,
					isActive: accordion.isActive ? false : true
				}

			}

			if (openOne && accordion.id === id) {
				return {
					...accordion,
					isActive: accordion.isActive ? false : true
				}
			}

			if (openOne && accordion.id !== id) {
				return  {
					...accordion,
					isActive: false
				}
			}

			return accordion;
		})

		setaccordionItem(newAccordionList);
};


	return (
		<Fragment>
			<div className="cwp_accordion_wrapper">
				{accordionItem.map((acoordionValue, idx) => {
					const { id, title, description, isActive } = acoordionValue;
					

					return (
						<div className="cwp_accordion_item_wrapper" key={idx}>
							<div classNmae="cwp_wrapper_inner">
								<a
									className="acfb_accordion_content"
									onClick={() => classToggleItem(id)}
								>
									{title}
								</a>
								{
									isActive && (
										<div
											className="acfb_accordion_content"
										>
											<p>{description}</p>
										</div>
									)
								}
							</div>
						</div>
					);
				})}
			</div>

			<InspectorControls>
				{/* <PanelBody title="General"> */}
					{/* <PanelRow>
						<span>Open at One Item</span>
						<FormToggle checked={isOpen} onChange={() => setisOpen(!isOpen)} />
					</PanelRow>
				</PanelBody> */}
			</InspectorControls>
		</Fragment>
	);
}

export default Edit;
