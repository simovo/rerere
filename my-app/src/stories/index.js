import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import LoginForm from '../components/LoginForm'

storiesOf('LoginForm', module)
  .add('empty', () => <LoginForm />);

storiesOf('Button', module)
  .add('with text', () => <button>Storybook</button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
