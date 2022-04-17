module.exports = {
	prompt: ({ inquirer }) => {
		const questions = [
			{
				type: 'input',
				name: 'name',
				message: 'Enter page component name (kebab-case)'
			},
		]
		return inquirer
			.prompt(questions)
			.then(answers => answers)
	}
}
