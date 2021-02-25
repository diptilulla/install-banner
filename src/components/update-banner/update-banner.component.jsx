import React from 'react';
import './update-banner.styles.scss';

import FormInput from '../form-input/form-input.component';

const UpdateBanner = ({ heading, description, install_button, bgcolor, textcolor, handleChange}) => (
<div className='update-banner'>
          <h3>UPDATE INSTALL BANNER</h3>
          <hr></hr>
          <form className='update-banner-form'>
            <FormInput
              type= 'text'
              name= 'heading'
              value={heading}
              handleChange={handleChange}
              label='Heading'
              required
            />
            <FormInput
              type= 'text'
              name= 'description'
              value={description}
              handleChange={handleChange}
              label='Description'
              required
            />
            <FormInput className='color'
              type= 'color'
              name= 'bgcolor'
              value={bgcolor}
              handleChange={handleChange}
              label='Background Color'
              required
            />
            <FormInput className='color'
              type= 'color'
              name= 'textcolor'
              value={textcolor}
              handleChange={handleChange}
              label='Text Color'
              required
            />
            <FormInput
              type= 'text'
              name= 'install_button'
              value={install_button}
              handleChange={handleChange}
              label='Install Button Text'
              required
            />
          </form>
        </div>
)

export default UpdateBanner;