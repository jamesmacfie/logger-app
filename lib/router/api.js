'use strict';

/**
 * API for the loos. Takes an optional `id` query parameter which will only return
 * a single loo.
 */
 Router.route('/api/loos', {
	name: 'apiLoos',
	where: 'server',
	action: function() {
		var queries = this.request.query,
			loos;

		if (queries.id) {
			loos = [Loos.findOne(queries.id)];
		} else {
			loos =	Loos.find().fetch();
		}

		this.response.writeHead(200, {'Content-Type': 'text/html'});
		this.response.end(JSON.stringify(loos));
	}
});
