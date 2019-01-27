import config from '../../scripts/config';
import PreAnalysis from '../../scripts/PreAnalysis';

//sourceNode根据开始面板的选择在这里初始化(sourceInit)
function BeginPanel(context, analyser, bigBeatArr, convolutionNodes, gainNodes, sourceGainNode, convolutionInfo) {
	let beginBtn = document.getElementById('beginBtn');
	let audio = document.getElementById('song');//audioEl
	let audioFile = document.getElementById('file');
	let beginPanel = document.getElementById('beginPanel');
	let singBtn = document.getElementById('singBtn');

	beginBtn.addEventListener('click', () => {
		handleAudio('click');
	})

	let handleAudio = (flag) => {
		let sourceInit = context.createMediaElementSource(audio);
		sourceInit.connect(sourceGainNode);
		sourceGainNode.connect(analyser);
		analyser.connect(context.destination);

		for (let i = 0; i < convolutionNodes.length; i++) {
			sourceInit.connect(convolutionNodes[i]);
			convolutionNodes[i].connect(gainNodes[i]);
			gainNodes[i].connect(analyser);
			analyser.connect(context.destination);
		}
		
		let buffer = context.createBuffer(1, 1, config.sampleRateGuess / 2);
		let source = context.createBufferSource();
		source.buffer = buffer;
		source.connect(context.destination);
		source.start(0);

		audio.play();//得同步的方法紧接着事件触发才行

		beginPanel.remove();//todo 加个处理中，然后取消开始面板放在回调中

		if (flag === 'click') {
			PreAnalysis(audio, bigBeatArr);
		} else {
			audio.oncanplaythrough = () => {
				PreAnalysis(audio, bigBeatArr);
			};
		}
	}
}

export default BeginPanel;