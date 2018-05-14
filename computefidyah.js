// JavaScript Document
/*
ComputeFidyah v1.0, created 6th October 2004
ComputeFidyah v2.0, updated 11th November 2004
ComputeFidyah v3.0, updated 27th July 2011
ComputeFidyah v4.0, updated 28th April 2014
ComputeFidyah v5.0, updated 15 May 2018

Created by Hazrul Azhar Bin Jamari

Visit me: https://www.hazrulazhar.com

This application is based on Fidyah Calculator, created by Majlis Ugama Islam Singapura
(http://www.muis.gov.sg/english/Fidyah_Calculator/Fidyah_Calculator.aspx?pMenu=5) . However, the
application which this software is based on, is only accurate up to 80 years of Ramadhan.
ComputeFidyah is 100% accurate and can calculate Fidyah for an infinite number of years. This software can
run on any Javascript-enabled web browser on any platform.

[New update on Muis Fidyah Calculator, 11th November 2004]
Muis has updated its Fidyah Calculator to a similar version of ComputeFidyah 1.0. It is cross browser and
cross platform but not cross medium, which means it cannot be viewed on mobile phones and pdas properly. The
new calculator can be found at (http://www.muis.gov.sg/eservices/fidyah_online.aspx). However, the new calculator
has some lacks which still makes ComputeFidyah 2.0 much more superior.

* Muis Fidyah Calculator runs on the server-side and uses a Javascript postback method which ruins the flow of
the user. This confuses the user temporarily.

* Because it requires a postback method, calling the server several times, the flow is slower. ComputeFidyah 2.0
is much faster because it is run completely on the client side.

[Efforts taken to get mass use of ComputeFidyah 2.0]
The mass use of ComputeFidyah 2.0 will allow the high possibility of syndication. Singapore mosques, or
people with personal homepages may add this calculator to their homepages if Muis adopts the software
and have higher confidence of its calculation accountability. A working syndication example can be found at
(http://www.mosque.org.sg/ghufran/services/zakat.htm).


[Update on 27th July 2011]
The price of rice per kati has changed from 90c to $1.20

[Update on 28th April 2014]
Moved server and change of ownership of code from Verbeter Group to ALM Group Pte Ltd

[Update on 22nd July 2015]
The price of rice per kati has changed from $1.20 to $1.30

[Update on 10 May 2018]
Assumed ownership of code personally - Hazrul Azhar Jamari
Updated the code to reflect some small changes.

[New update on Muis Fidyah Calculator, 10 May 2018]
They finally updated the site with a purely Javascrpt page. It's now smooth and responsive.

!!! IMPORTANT NOTICE !!!

This application is protected by the GNU General Public License Version 2, June 1991. Ref: http://www.opensource.org/licenses/gpl-license.php

TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

0. This License applies to any program or other work which contains a notice placed by the copyright holder saying it may be distributed under the terms of this General Public License. The "Program", below, refers to any such program or work, and a "work based on the Program" means either the Program or any derivative work under copyright law: that is to say, a work containing the Program or a portion of it, either verbatim or with modifications and/or translated into another language. (Hereinafter, translation is included without limitation in the term "modification".) Each licensee is addressed as "you".

Activities other than copying, distribution and modification are not covered by this License; they are outside its scope. The act of running the Program is not restricted, and the output from the Program is covered only if its contents constitute a work based on the Program (independent of having been made by running the Program). Whether that is true depends on what the Program does.

1. You may copy and distribute verbatim copies of the Program's source code as you receive it, in any medium, provided that you conspicuously and appropriately publish on each copy an appropriate copyright notice and disclaimer of warranty; keep intact all the notices that refer to this License and to the absence of any warranty; and give any other recipients of the Program a copy of this License along with the Program.

You may charge a fee for the physical act of transferring a copy, and you may at your option offer warranty protection in exchange for a fee.

2. You may modify your copy or copies of the Program or any portion of it, thus forming a work based on the Program, and copy and distribute such modifications or work under the terms of Section 1 above, provided that you also meet all of these conditions:

a) You must cause the modified files to carry prominent notices stating that you changed the files and the date of any change.

b) You must cause any work that you distribute or publish, that in whole or in part contains or is derived from the Program or any part thereof, to be licensed as a whole at no charge to all third parties under the terms of this License.

c) If the modified program normally reads commands interactively when run, you must cause it, when started running for such interactive use in the most ordinary way, to print or display an announcement including an appropriate copyright notice and a notice that there is no warranty (or else, saying that you provide a warranty) and that users may redistribute the program under these conditions, and telling the user how to view a copy of this License. (Exception: if the Program itself is interactive but does not normally print such an announcement, your work based on the Program is not required to print an announcement.)

These requirements apply to the modified work as a whole. If identifiable sections of that work are not derived from the Program, and can be reasonably considered independent and separate works in themselves, then this License, and its terms, do not apply to those sections when you distribute them as separate works. But when you distribute the same sections as part of a whole which is a work based on the Program, the distribution of the whole must be on the terms of this License, whose permissions for other licensees extend to the entire whole, and thus to each and every part regardless of who wrote it.

Thus, it is not the intent of this section to claim rights or contest your rights to work written entirely by you; rather, the intent is to exercise the right to control the distribution of derivative or collective works based on the Program.

In addition, mere aggregation of another work not based on the Program with the Program (or with a work based on the Program) on a volume of a storage or distribution medium does not bring the other work under the scope of this License.

3. You may copy and distribute the Program (or a work based on it, under Section 2) in object code or executable form under the terms of Sections 1 and 2 above provided that you also do one of the following:

a) Accompany it with the complete corresponding machine-readable source code, which must be distributed under the terms of Sections 1 and 2 above on a medium customarily used for software interchange; or,

b) Accompany it with a written offer, valid for at least three years, to give any third party, for a charge no more than your cost of physically performing source distribution, a complete machine-readable copy of the corresponding source code, to be distributed under the terms of Sections 1 and 2 above on a medium customarily used for software interchange; or,

c) Accompany it with the information you received as to the offer to distribute corresponding source code. (This alternative is allowed only for noncommercial distribution and only if you received the program in object code or executable form with such an offer, in accord with Subsection b above.)

The source code for a work means the preferred form of the work for making modifications to it. For an executable work, complete source code means all the source code for all modules it contains, plus any associated interface definition files, plus the scripts used to control compilation and installation of the executable. However, as a special exception, the source code distributed need not include anything that is normally distributed (in either source or binary form) with the major components (compiler, kernel, and so on) of the operating system on which the executable runs, unless that component itself accompanies the executable.

If distribution of executable or object code is made by offering access to copy from a designated place, then offering equivalent access to copy the source code from the same place counts as distribution of the source code, even though third parties are not compelled to copy the source along with the object code.

4. You may not copy, modify, sublicense, or distribute the Program except as expressly provided under this License. Any attempt otherwise to copy, modify, sublicense or distribute the Program is void, and will automatically terminate your rights under this License. However, parties who have received copies, or rights, from you under this License will not have their licenses terminated so long as such parties remain in full compliance.

5. You are not required to accept this License, since you have not signed it. However, nothing else grants you permission to modify or distribute the Program or its derivative works. These actions are prohibited by law if you do not accept this License. Therefore, by modifying or distributing the Program (or any work based on the Program), you indicate your acceptance of this License to do so, and all its terms and conditions for copying, distributing or modifying the Program or works based on it.

6. Each time you redistribute the Program (or any work based on the Program), the recipient automatically receives a license from the original licensor to copy, distribute or modify the Program subject to these terms and conditions. You may not impose any further restrictions on the recipients' exercise of the rights granted herein. You are not responsible for enforcing compliance by third parties to this License.

7. If, as a consequence of a court judgment or allegation of patent infringement or for any other reason (not limited to patent issues), conditions are imposed on you (whether by court order, agreement or otherwise) that contradict the conditions of this License, they do not excuse you from the conditions of this License. If you cannot distribute so as to satisfy simultaneously your obligations under this License and any other pertinent obligations, then as a consequence you may not distribute the Program at all. For example, if a patent license would not permit royalty-free redistribution of the Program by all those who receive copies directly or indirectly through you, then the only way you could satisfy both it and this License would be to refrain entirely from distribution of the Program.

If any portion of this section is held invalid or unenforceable under any particular circumstance, the balance of the section is intended to apply and the section as a whole is intended to apply in other circumstances.

It is not the purpose of this section to induce you to infringe any patents or other property right claims or to contest validity of any such claims; this section has the sole purpose of protecting the integrity of the free software distribution system, which is implemented by public license practices. Many people have made generous contributions to the wide range of software distributed through that system in reliance on consistent application of that system; it is up to the author/donor to decide if he or she is willing to distribute software through any other system and a licensee cannot impose that choice.

This section is intended to make thoroughly clear what is believed to be a consequence of the rest of this License.

8. If the distribution and/or use of the Program is restricted in certain countries either by patents or by copyrighted interfaces, the original copyright holder who places the Program under this License may add an explicit geographical distribution limitation excluding those countries, so that distribution is permitted only in or among countries not thus excluded. In such case, this License incorporates the limitation as if written in the body of this License.

9. The Free Software Foundation may publish revised and/or new versions of the General Public License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns.

Each version is given a distinguishing version number. If the Program specifies a version number of this License which applies to it and "any later version", you have the option of following the terms and conditions either of that version or of any later version published by the Free Software Foundation. If the Program does not specify a version number of this License, you may choose any version ever published by the Free Software Foundation.

10. If you wish to incorporate parts of the Program into other free programs whose distribution conditions are different, write to the author to ask for permission. For software which is copyrighted by the Free Software Foundation, write to the Free Software Foundation; we sometimes make exceptions for this. Our decision will be guided by the two goals of preserving the free status of all derivatives of our free software and of promoting the sharing and reuse of software generally.

NO WARRANTY

11. BECAUSE THE PROGRAM IS LICENSED FREE OF CHARGE, THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

12. IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MAY MODIFY AND/OR REDISTRIBUTE THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

END OF TERMS AND CONDITIONS



*/
// Browser detect code
var ie4=document.all
var ns4=document.layers
var ns6=document.getElementById&&!document.all

var priceofriceperkati="1.30";

function writeKati() {
	if (ns4) {
	ns4.priceofriceperkati.document.write(priceofriceperkati);
	ns4.priceofriceperkati.document.close();
	}
	else if (ie4) {
	ie4.priceofriceperkati1.innerHTML = priceofriceperkati;
	}
	else if (ns6) {
	document.getElementById("priceofriceperkati1").innerHTML = priceofriceperkati;
	}
}

function changeYears() {
	if (ns4) {
	ns4.totalnumofyears2.document.write(frmFid.totalnumofyears.value);
	ns4.totalnumofyears2.document.close();
	}
	else if (ie4) {
	ie4.totalnumofyears2.innerHTML=frmFid.totalnumofyears.value
	}
	else if (ns6) {
	document.getElementById("totalnumofyears2").innerHTML = document.frmFid.totalnumofyears.value;
	}
}

function computeFidyah() {
var totalnumofyears=document.frmFid.totalnumofyears.value;
var numofdaysperramadan=document.frmFid.numofdaysperramadan.value;
var totalnumoframadandays;
var adddays=document.frmFid.adddays.value;
var totalfidyahdays;
var totalfidyahpayable;
var y;
var lasty;
var midy=0;

//Check for zeros
	if (totalnumofyears=="") {
		totalnumofyears=0;
	}

	if (numofdaysperramadan=="") {
		numofdaysperramadan=0;
	}

	if (adddays=="") {
		adddays=0;
	}

for (i=0; i < totalnumofyears; i++) {
y=parseInt(numofdaysperramadan)*i;
midy=midy+y;
}

lasty=parseInt(numofdaysperramadan)*parseInt(totalnumofyears);

totalnumoframadandays=parseInt(midy)+parseInt(lasty);
totalfidyahdays=parseInt(totalnumoframadandays)+parseInt(adddays);

totalfidyahpayable=parseInt(totalfidyahdays)*parseFloat(priceofriceperkati);
totalfidyahpayable=totalfidyahpayable.toFixed(2) //Rounds off to 2 decimal place

	if (ns4) {
	ns4.totalnumoframadandays.document.write(totalnumoframadandays);
	ns4.totalnumoframadandays.document.close();
	ns4.totalfidyahdays.document.write(totalfidyahdays);
	ns4.totalfidyahdays.document.close();
	ns4.totalfidyahpayable.document.write(totalfidyahpayable);
	ns4.totalfidyahpayable.document.close();
	}
	else if (ie4) {
	ie4.totalnumoframadandays.innerHTML=totalnumoframadandays, ie4.totalfidyahdays.innerHTML=totalfidyahdays, ie4.totalfidyahpayable.innerHTML=totalfidyahpayable;
	}
	else if (ns6) {
	document.getElementById("totalnumoframadandays").innerHTML = totalnumoframadandays, document.getElementById("totalfidyahdays").innerHTML=totalfidyahdays, document.getElementById("totalfidyahpayable").innerHTML=totalfidyahpayable;
	}
}

window.onload = writeKati;
