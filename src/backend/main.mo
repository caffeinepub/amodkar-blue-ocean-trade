import List "mo:core/List";
import Runtime "mo:core/Runtime";



actor {
  type BusinessProfile = {
    name : Text;
    description : Text;
    email : Text;
    phone : Text; // Using phone field for WhatsApp number
    address : Text;
  };

  type Inquiry = {
    name : Text;
    email : Text;
    message : Text;
  };

  let businessProfile : BusinessProfile = {
    name = "Amodkar Blue Ocean Trade";
    description = "Specializing in international trade and logistics, offering comprehensive import-export solutions.";
    email = "amodkarblueoceantrade@gmail.com";
    phone = "+91 9820787730"; // WhatsApp number included here
    address = "Mumbai, India";
  };

  let inquiries = List.empty<Inquiry>();

  public query ({ caller }) func getBusinessProfile() : async BusinessProfile {
    businessProfile;
  };

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, message : Text) : async () {
    if (name.size() == 0 or email.size() == 0 or message.size() == 0) {
      Runtime.trap("All fields must be filled out");
    };

    let inquiry : Inquiry = {
      name;
      email;
      message;
    };

    inquiries.add(inquiry);
  };

  public query ({ caller }) func getInquiries() : async [Inquiry] {
    inquiries.toArray();
  };
};
