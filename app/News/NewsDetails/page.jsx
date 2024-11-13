import Head from "next/head";
import Image from "next/image";
import Admin from "../../../public/Admin.png";
import Gallery1 from "../../../public/Gallery1.jpeg";

function NewsDetails() {
  return (
    <>
      <Head>
        <title>Responsive web design best practices</title>
        <meta
          name="description"
          content="Learn the best practices for creating responsive web designs that provide a seamless user experience across all devices."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Date */}
        <div className="text-center text-gray-500 text-sm mb-4">01.01.24</div>

        {/* Title */}
        <h1 className="text-center text-4xl font-bold text-gray-900 mb-4">
          Best Cars in the Market
        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Learn the best practices for creating responsive web designs that
          provide a seamless user experience across all devices.
        </p>

        {/* Author */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-12 h-12 relative">
            <Image
              src={Admin}
              alt="Michael Andreuzza"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
          <div className="text-sm">
            <div className="font-medium text-gray-900">Admin</div>
            <div className="text-gray-500">Admin@halaauto.com</div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden mb-16">
          <Image
            src={Gallery1}
            alt="Desk setup with laptop"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-12">
            Responsive web design is critical in todays digital landscape, where
            users access websites from a variety of devices with different
            screen sizes and resolutions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Mobile-First Approach
          </h2>

          <p className="text-gray-600 mb-12">
            The mobile-first approach involves designing your website starting
            with the smallest screen sizes first and then gradually enhancing
            the design for larger screens. This method ensures that your site is
            accessible and functional on mobile devices, which are often the
            primary way users access the web. By prioritizing mobile design, you
            focus on the Core content and functionality, providing a solid
            foundation that can be built upon for larger screens.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Advantages of Mobile-First Approach
          </h2>

          <p className="text-gray-600 mb-12">
            Designing for mobile first helps streamline content, improve
            performance, and ensure accessibility. This approach forces
            designers to focus on whats truly important, removing unnecessary
            elements that could clutter the user experience on smaller screens.
            Additionally, it typically results in faster load times and better
            overall performance, which are critical for retaining mobile users.
          </p>

          {/* Quote */}
          <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-12">
            <p className="text-blue-500 italic font-medium">
              Responsive web design is not a feature, its a must.
            </p>
            <footer className="text-gray-500 mt-2">- Jeffrey Zeldman</footer>
          </blockquote>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Inclusion</h2>

          <p className="text-gray-600">
            Responsive web design is vital for providing a seamless user
            experience across all devices. By following these best practices,
            you can create a website that is both functional and visually
            appealing, regardless of the screen size. Embracing responsive
            design not only improves user satisfaction but also enhances your
            sites accessibility and performance, making it a valuable approach
            in todays multi-device world.
          </p>
        </div>
      </main>
    </>
  );
}

export default NewsDetails;
