/* eslint-disable react/no-unknown-property */
import { MapPin, Phone, Mail } from "lucide-react";

export default function Component() {
  return (
    <div className="container  mx-auto px-4 py-8">
      <h1 className="text-3xl text-zinc-700 font-bold text-center mb-8">
        get in touch with us
      </h1>
      <p className="my-10 text-center text-gray-600 text-lg">
        Get in touch with us today to discuss how we can help bring your
        projects to life.
        <br></br>
        Reach out through the contact details below, and let’s start crafting
        excellence together.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl text-zinc-700 font-semibold mb-4">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                <span className="text-l">
                  9810658545 || 8130274372 || 6302695082{" "}
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <span className="text-l">Advancecncwork@gmail.com</span>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span className="text-l">
                  Khasra no. 379 gali no. 1.5
                  <br />
                  Ground floor
                  <br />
                  near Bikaner sweet Sawroop nagar
                  <br />
                  Delhi-11004
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-64"
          src="data:image/png;base64,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"
        />
      </div>
      <div className="space-y-4 w-full">
        <h2 className="text-xl text-zinc-700 font-semibold">Our Location</h2>
        <div className="w-full">
        <iframe
        className="h-80 w-full" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3497.618505782989!2d77.14789957550552!3d28.76080507559494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQ1JzM4LjkiTiA3N8KwMDknMDEuNyJF!5e0!3m2!1sen!2sin!4v1726293831779!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
}
