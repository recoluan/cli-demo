import { CAC } from 'cac';

// 创建一个cac实例
const program = new CAC('cli-demo');

// 注册选项，可用尖括号代表必填参数，方括号可选参数
program.option('--type [type]', 'Choose a project type', {default: 'node'});

// 注册命令，...同展开操作符，可填多个文件
program.command('lint [...files]', 'lint files').action((files, options) => {
	// lint files
});

// 注册命令选项
program.command('rm <dir>', 'Remove a dir')
	.option('-r, --recursive', 'Remove recursively')
	.action((dir, options) => {
		console.log('remove ' + dir + (options.recursive ? ' recursively' : ''));
	});

program.help();
  
// 获取命令行输入参数 
program.parse();
