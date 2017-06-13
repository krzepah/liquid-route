import { h, Component, cloneElement } from 'preact';
import TransitionGroup from 'preact-transition-group';
import LiquidAnimator from './LiquidAnimator.jsx';
import AsyncRoute from 'preact-async-route';

let currentAnimation = null;

export default class LiquidRoute extends Component {
	constructor() {
		super();
	}
	getEntryAnimation() {
		return currentAnimation.getEntryAnimation();
	}
	getExitAnimation() {
		return currentAnimation.getExitAnimation();
	}
	setCurrentAnimation() {
		currentAnimation = this.props.animator;
	}
	render(props) {
		return (
				<TransitionGroup>
					<LiquidAnimator
						getEntryAnimation={()=>{return this.getEntryAnimation()}}
						getExitAnimation={()=>{return this.getExitAnimation()}}
						key={props.url}
						onSetCurrentAnimation={()=>{this.setCurrentAnimation()}} {...props}>
						<AsyncRoute {...props}/>
					</LiquidAnimator>
				</TransitionGroup>
		);
	}
}