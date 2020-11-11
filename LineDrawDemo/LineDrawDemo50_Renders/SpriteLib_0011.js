var StdSize = 100;


function drawStdCircle()
{
	ellipse(0,0,StdSize,StdSize);
}

function drawStdFace()
{
	print("face");
	// face
	ellipse(0,0,StdSize,StdSize);

	var ESize = -0.2*StdSize;
	// LEye
	fill(255);
	ellipse(-0.2*StdSize,-0.1*StdSize,ESize,ESize);
	fill(0);
	ellipse(-0.2*StdSize,-0.1*StdSize,0.4*ESize,0.4*ESize);

	// REye
	fill(255);
	ellipse(0.2*StdSize,-0.1*StdSize,ESize,ESize);
	fill(0);
	ellipse(0.2*StdSize,-0.1*StdSize,0.4*ESize,0.4*ESize);

	// Mouth
	var MWd = 0.3*StdSize;
	var MHt = 0.2*StdSize;
	fill(255,0,0);
	ellipse(0,MHt,MWd,MHt);
}
