这是用于成员提交代码练习的仓库
<!DOCTYPE html>
<html>
<head>
	<title>请留下个人资料</title>
</head>
<body>
	<form>
		<h2 align="center">请留下个人信息</h2>
		<hr/ color="#000000" width="200px">
		<table align="center">
			<tr>
				<td align="right">
					姓名：
				</td>
				<td align="left">
					<input type="text" name="username" maxlength="5">
				</td>
			</tr>
			<tr align="left">
				<td align="right">电话：</td>
				<td>
					<input type="text" name="usersphone" maxlength="11">
				</td>
			</tr>
			<tr>
				<td align="right">Email:</td>
				<td align="left"><input type="text" name="usersemail" value="@163.com"></td>
			</tr>
			<tr>
				<td align="right">性别：</td>
				<td align="left">
					男<input type="radio" value="mal" name="px" >
					女<input type="radio" value="femal" name="px" >
				</td>
			</tr>
			<tr>
				<td align="right">年龄：</td>
				<td align="left">
					<select name="nianling">
						<option value="20">20</option>
						<option value="un" selected>20岁以下</option>
						<option value="19">19</option>
						<option value="18">18</option>
						<option value="17">17</option>
						<option value="16">16</option>
						<option value="15">15</option>
						<option value="14">14</option>
						<option value="13">13</option>
						<option value="12">12</option>
						<option value="11">11</option>
						<option value="10">10</option>
						<option value="9">9</option>
						<option value="8">8</option>
						<option value="7">7</option>
						<option value="6">6</option>
						<option value="5">5</option>
						<option value="4">4</option>
						<option value="3">3</option>
						<option value="2">2</option>
						<option value="1">1</option>
						<option value="unkown">保密</option>
					</select>
				</td>
			</tr>
			<tr>
				<td align="right">留言板：</td>
				<td align="left">
					<textarea name="jj" rows="6" cois="50" placeholder="请输入提示信息">
						
					</textarea>
				</td>
			</tr>
			<tr>
				<td rowspan="2" align="right">您的爱好：</td>
				<td align="left">
					<input type="checkbox" name="xy" align="a1">运动
					<input type="checkbox" name="xy" align="a2">阅读
				</td>
			</tr>
			<tr>
				<td align="left">
					<input type="checkbox" name="xy" align="a3">听音乐
					<input type="checkbox" name="xy" align="a4">阅读
				</td>
			</tr>
			<tr align="center">
				<td colspan="2" >
					<input type="submit" value="提交">
					<input type="Reset" value="全部重写">
				</td>
				
			</tr>
		</table>
	</form>
</body>
</html>
