<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Prime Numbers</title>
</head>
<body>
<script>
var i;
var values = [];
values[0] = 2;
var n = prompt("Give n");
for (i = 3; i < n; i++)
{
	var count = 0;
	for (j = 2; j < i; j++)
	{
		if (i%j != 0)
		{
			count = count + 1;
		}
		else
		{
			break;
		}
	}
	if (count == i - 2)
	{
		values.push(i);
	}
}
document.write(values);
</script>
</body>
</html>
