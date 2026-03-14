import Array "mo:core/Array";
import List "mo:core/List";

actor {
  type Enquiry = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    productInterest : Text;
  };

  let enquiries = List.empty<Enquiry>();

  public shared ({ caller }) func submitEnquiry(name : Text, email : Text, phone : Text, message : Text, productInterest : Text) : async () {
    let enquiry : Enquiry = {
      name;
      email;
      phone;
      message;
      productInterest;
    };
    enquiries.add(enquiry);
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    enquiries.toArray();
  };
};
