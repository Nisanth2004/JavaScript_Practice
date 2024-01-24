function create_html_tag() {
    // Taking paragraph content
    var content = document.getElementById("input_text").value;
  
    // Creating paragraph element
    var paragraph = document.createElement("p"); // <p> </p>
  
    // Creating text node and appending the content
    var our_data = document.createTextNode(content);
  
    // Adding content to our paragraph
    paragraph.appendChild(our_data);
  
    // Retrieving the div element
    var mydiv = document.getElementById("div1");
  
    // Appending the paragraph element to the div
    mydiv.appendChild(paragraph);
  }
  