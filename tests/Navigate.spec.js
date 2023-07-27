import { mount } from '@vue/test-utils';
import Navigation from '../components/Navigate.vue';

describe('Navigation', () => {
  test('renders navigation links correctly', () => {
    const wrapper = mount(Navigation);

    // Find Blog link
    const blogLink = wrapper.find('[href="/blog"]');
    expect(blogLink.exists()).toBe(true);
    expect(blogLink.text()).toBe('Blog');
    expect(blogLink.attributes('class')).toContain('nav-link');

    // Find Contact link
    const contactLink = wrapper.find('[href="#contact"]');
    expect(contactLink.exists()).toBe(true);
    expect(contactLink.text()).toBe('Contact');
    expect(contactLink.attributes('class')).toContain('nav-link');
  });

  test('navigation toggle button displays the correct text and icon', () => {
    const wrapper = mount(Navigation);

    // Find the navigation toggle button
    const toggleButton = wrapper.find('[data-bs-toggle="collapse"]');
    expect(toggleButton.exists()).toBe(true);
    expect(toggleButton.text()).toBe('Menu');
    expect(toggleButton.find('i.fas.fa-bars').exists()).toBe(true);
  });
});
