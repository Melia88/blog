(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{478:function(t,n,e){"use strict";e.r(n);var o=e(2),a=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Day2")]),t._v(" "),e("p",[t._v("Afternoon Challenge https://github.com/Melia88/contractor")]),t._v(" "),e("p",[t._v("Read Dotnet WebAPI's > Relationships, and answer the following questions")]),t._v(" "),e("p",[t._v("What is the difference between a primary key and a foreign key")]),t._v(" "),e("blockquote",[e("p",[t._v("A primary key is the unique identifier of the table itself and a foreign key is a key from another table that we are using.")])]),t._v(" "),e("p",[t._v("What is an Alias?")]),t._v(" "),e("blockquote",[e("p",[t._v("An alias is a name we are defining in our sql statement to call upon when needed.")])]),t._v(" "),e("p",[t._v("Demonstrate how you would query a join statement that would get all of a doctors patients from the following collections:")]),t._v(" "),e("p",[t._v("CREATE TABLE doctors (\nid INT NOT NULL AUTO_INCREMENT,\n-- CODE OMITTED\nPRIMARY KEY (id)\n)")]),t._v(" "),e("p",[t._v("CREATE TABLE patients (\nid INT NOT NULL AUTO_INCREMENT,\n-- CODE OMITTED\nPRIMARY KEY (id)\n)")]),t._v(" "),e("p",[t._v("CREATE TABLE doctors_patients (\nid INT NOT NULL AUTO_INCREMENT,\ndoctorId INT NOT NULL,\npatientId INT NOT NULL,")]),t._v(" "),e("p",[t._v("FOREIGN KEY (doctorId)\nREFERENCES doctors(id),\nFOREIGN KEY (patientId)\nREFERENCES patients(id),\n)")]),t._v(" "),e("blockquote"),t._v(" "),e("p",[t._v("SELECT\nd."),e("em",[t._v(",\np.")]),t._v("\ndp.Id as doctorsPatientsId\ndp.doctorId as doctorId,\ndp.patientId as patientId\nFROM\ndoctors_patients dp\nJOIN doctors d ON d.id = dp.doctorId\nJOIN patients p ON p.id = dp.patientId\nWHERE doctorId = @id;")])])}),[],!1,null,null,null);n.default=a.exports}}]);