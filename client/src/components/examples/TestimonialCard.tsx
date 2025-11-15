import { TestimonialCard } from '../TestimonialCard';
import avatarImage from '@assets/generated_images/Testimonial_client_1_photo_4ad055da.png';

export default function TestimonialCardExample() {
  return (
    <TestimonialCard
      quote="Alex delivered an exceptional web application that exceeded our expectations. The code quality and architecture were top-notch, making future maintenance a breeze."
      author="Sarah Johnson"
      role="CTO"
      company="TechCorp"
      avatar={avatarImage}
    />
  );
}
