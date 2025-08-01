// Utils
import { hyperscript as h } from '@laboratory/common/utils';

// Web Components
import { PageAnchor, AtomBackground } from '@laboratory/common/components';

// Style
import './style.css';

// Svgs
import UsernameSvg from '@/icons/username.svg';
import PasswordSvg from '@/icons/password.svg';

export default class App {
  constructor() {
    PageAnchor.define();
    AtomBackground.define();
  }

  addInputWrapperFocusedClass(event: FocusEvent): void {
    const inputElement = event.target as HTMLInputElement;
    inputElement.parentElement.classList.add('input-wrapper__focused');
  }

  removeInputWrapperFocusedClass(event: FocusEvent): void {
    const inputElement = event.target as HTMLInputElement;
    inputElement.parentElement.classList.remove('input-wrapper__focused');
  }

  render(): HTMLElement {
    return h('div', { className: 'container' }, [
      h('atom-background', {
        attrs: {
          animation: true,
          'active-button-text': 'On Effect',
          'inactive-button-text': 'Off Effect'
        }
      }),
      h('div', { className: 'wrapper' }, [
        h('h3', { className: 'title' }, 'Login to Laboratory'),
        h('div', { className: 'input-wrapper' }, [
          h('span', { className: 'input-icon', innerHTML: UsernameSvg }),
          h('input', {
            type: 'text',
            className: 'input-inner',
            placeholder: 'Please type the username',
            value: 'admin',
            onfocus: this.addInputWrapperFocusedClass,
            onblur: this.removeInputWrapperFocusedClass
          })
        ]),
        h('div', { className: 'input-wrapper' }, [
          h('span', { className: 'input-icon', innerHTML: PasswordSvg }),
          h('input', {
            type: 'password',
            className: 'input-inner',
            placeholder: 'Please type the password',
            value: '123456',
            onfocus: this.addInputWrapperFocusedClass,
            onblur: this.removeInputWrapperFocusedClass
          })
        ]),
        h(
          'button',
          {
            className: 'login-button',
            onclick(event: MouseEvent) {
              console.log('onclick', event);
            }
          },
          'Login'
        )
      ])
    ]);
  }
}

// <svg viewBox="64 64 896 896" focusable="false" data-icon="user" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>

// <svg viewBox="64 64 896 896" focusable="false" data-icon="lock" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"></path></svg>
