var ProductNameMap = {
  Opel: [{ marka: "Zafira", modeli: ["2022", "FileA11.zip"] }],
  ProductB: [
    { marka: "3.5.0", modeli: ["FileB1.zip", "FileB11.zip"] },
    { marka: "4.0.1", modeli: ["FileB2.zip", "FileB22.zip"] },
  ],
  ProductC: [
    { marka: "1.0.0", modeli: ["FileC1.zip", "FileC11.zip"] },
    { marka: "1.0.1", modeli: ["FileC2.zip", "FileC22.zip"] },
  ],
};

function PrepopulateProductName() {
  var ProductNameselect = document.getElementById("selProductName");
  var i = 1;
  for (var selProductName in ProductNameMap) {
    ProductNameselect.options[i++] = new Option(selProductName);
  }
}

function changeProductName(productNameID) {
  var versionSelect = document.getElementById("selProductVersion");
  versionSelect.innerHTML = "<option>--Choose Product Version</option>"; // Remove previous options
  var fileSelect = document.getElementById("selFileName");
  fileSelect.innerHTML = "<option>--Choose Filename</option>"; // Remove previous options
  var versions = ProductNameMap[productNameID];
  for (var i = 0; i < versions.length; i++) {
    versionSelect.appendChild(new Option(versions[i].marka));
  }
}

function changeProductVersion(productVersion) {
  var productNameID = document.getElementById("selProductName").value;
  var fileSelect = document.getElementById("selFileName");
  fileSelect.innerHTML = ""; // Remove previous options
  var versions = ProductNameMap[productNameID];
  for (var i = 0; i < versions.length; i++) {
    if (versions[i].marka == productVersion) {
      var filenames = versions[i].modeli;
      for (var j = 0; j < filenames.length; j++) {
        fileSelect.appendChild(new Option(filenames[j]));
      }
      break;
    }
  }
}

PrepopulateProductName();
