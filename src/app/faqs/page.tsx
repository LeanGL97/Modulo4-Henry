import Image from "next/image";
import faqs from "../../../public/faqs.jpg";
import gianouisw from "../../../public/gianouisw.png";

export default function FAQs() {

  return (
    <div className="bg-white text-blue-950">
      <div className="relative w-full h-96">
        <Image
          src={faqs}
          alt="Banner Background"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <h4 className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-4xl sm:text-5xl md:text-6xl text-center text-blue-950 py-5 bg-white/50">
          Frequently Asked Questions
        </h4>
      </div>
      
      <ul className="text-lg sm:text-xl md:text-2xl p-8 font-medium space-y-8">
        <div>
          <li className="text-xl sm:text-2xl">¿Are the products new or refurbished?</li>
          <p className="mt-4">We exclusively sell brand-new, original, and sealed products with Apple&apos;s official warranty. <br />We do not sell refurbished items, so you can shop with total confidence.</p>
          <hr className="border-t border-blue-950 my-4" />
        </div>
        <div>
          <li className="text-xl sm:text-2xl">¿What warranty do the products have?</li>
          <p className="mt-4">All our products come with Apple&apos;s official 1-year warranty from the date of purchase. This warranty covers manufacturing defects and technical failures. Additionally, we offer the option to purchase AppleCare+, which extends the warranty and provides extra protection against accidental damage.</p>
          <hr className="border-t border-blue-950 my-4" />
        </div>
        <div>
          <li className="text-xl sm:text-2xl">¿How does the return policy work?</li>
          <p className="mt-4">If you are not satisfied with your purchase, you can request a return within the first 14 days after receiving the product. The item must be in its original packaging, unused, and with all included accessories. If the product has a manufacturing defect, we will arrange a replacement or refund at no additional cost.</p>
          <hr className="border-t border-blue-950 my-4" />
        </div>
        <div>
          <li className="text-xl sm:text-2xl">¿Can I pick up my purchase in a physical store?</li>
          <p className="mt-4">Yes, we offer the option of in-store pickup at our authorized locations. When making your purchase, you can select the nearest store, and we will notify you when your product is ready for pickup. You will need to present your ID and purchase receipt.</p>
          <hr className="border-t border-blue-950 my-4" />
        </div>
        <div>
          <li className="text-xl sm:text-2xl">¿Do you ship nationwide?</li>
          <p className="mt-4">Yes, we offer shipping to the entire country through reliable courier services. In some areas, we provide express shipping, while in others, delivery time will depend on the logistics provider.</p>
          <hr className="border-t border-blue-950 my-4" />
        </div>
        <div>
          <li className="text-xl sm:text-2xl">¿How long does shipping take?</li>
          <p className="mt-4">Delivery times vary depending on the location:
            <br /> • Within the city: 24 to 48 business hours.
            <br /> • Nationwide shipping: 3 to 7 business days, depending on the destination.
            <br /> We will provide you with a tracking code so you can monitor your order status at all times.
          </p>
          <hr className="border-t border-blue-950 my-4" />
        </div>
      </ul>

      <div className="w-48 sm:w-64 mx-auto">
        <Image
          src={gianouisw}
          alt="Gianouis"
          className="rounded-full object-contain"
          width={256}
          height={256}
        />
      </div>
    </div>
  );
};
