const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	console.log('Congratulations, your extension "create-github-issue" is now active!');

	let disposable = vscode.commands.registerCommand('extension.createGitHubIssue', function () {
		// The code you place here will be executed every time your command is executed

		// curl -i -u githubteacher -d '{"title": "A sample new issue", "body": "The user interface is upside down", "labels": ["bug"] }' https://api.github.com/repos/githubteacher/example-basic/issues

		// jz22to3q5t3fzvmosgszxg2qtyfcnsk3a72j2kkb2ccdkdsps2cq
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
