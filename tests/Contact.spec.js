import { mount } from '@vue/test-utils';
import ContactForm from '../components/Contact.vue';

describe('ContactForm', () => {
  it('should show error messages for empty fields on form submission', async () => {
    const wrapper = mount(ContactForm);

    // Simulate form submission without filling in any fields
    await wrapper.find('form').trigger('submit.prevent');

    // Wait for next tick to allow form validation to take effect
    await wrapper.vm.$nextTick();

    // Assert that error messages are displayed for each required field
    expect(wrapper.find('.error-message[name="name"]').exists()).toBe(true);
    expect(wrapper.find('.error-message[name="email"]').exists()).toBe(true);
    expect(wrapper.find('.error-message[name="message"]').exists()).toBe(true);
  });

  it('should hide error messages when form fields are filled', async () => {
    const wrapper = mount(ContactForm);

    // Fill in the form fields
    await wrapper.find('#name').setValue('John Doe');
    await wrapper.find('#email').setValue('john@example.com');
    await wrapper.find('#message').setValue('Test message');

    // Simulate form submission after filling in the fields
    await wrapper.find('form').trigger('submit.prevent');

    // Wait for next tick to allow form validation to take effect
    await wrapper.vm.$nextTick();

    // Assert that error messages are hidden after filling in the fields
    expect(wrapper.find('.error-message[name="name"]').exists()).toBe(false);
    expect(wrapper.find('.error-message[name="email"]').exists()).toBe(false);
    expect(wrapper.find('.error-message[name="message"]').exists()).toBe(false);
  });

  it('should show success message after successful form submission', async () => {
    // Mock a response
    vi.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({ ok: true }));

    const wrapper = mount(ContactForm);

    // Fill in the form fields
    await wrapper.find('#name').setValue('John Doe');
    await wrapper.find('#email').setValue('john@example.com');
    await wrapper.find('#message').setValue('Test message');

    // Simulate form submission after filling in the fields
    await wrapper.find('form').trigger('submit.prevent');

    // Wait for next tick to allow form validation and form submission to complete
    await wrapper.vm.$nextTick();

    // Assert that success message is displayed after successful form submission
    expect(wrapper.find('.success-message').text()).toBe("Thanks for filling out the contact form. I'll be in touch.");
  });
});
