const counter = { request: 0 };
export function middleware(req, ev) {
	counter.request += 1;
	console.log(counter);
	return;
}
