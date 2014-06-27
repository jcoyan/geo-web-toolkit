module.exports = function (grunt) {
	http:// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		ngdocs: {
			options: {
				dest: 'docs',
				scripts: ['http://code.jquery.com/jquery-1.11.0.js',
                                'http://code.jquery.com/ui/1.10.4/jquery-ui.js',
                                'http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/js/bootstrap.min.js',
                                'angular.js',
                                'http://code.angularjs.org/1.2.8/angular-route.js',
                                'http://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.10.0/ui-bootstrap-tpls.js',
                                'http://cdnjs.cloudflare.com/ajax/libs/angular-ui-utils/0.1.1/angular-ui-utils.min.js',
                                'http://maps.google.com/maps/api/js?sensor=false&.js',
                                'http://cdnjs.cloudflare.com/ajax/libs/openlayers/2.13.1/OpenLayers.js',
                                'src/main/js/map services/layer-openlayersv2.js',
                                'src/main/js/map services/map-openlayersv2.js',
                                'src/main/js/map services/data-openlayersv2.js',
                                'src/main/js/map services/mapservices.js',
                                'src/main/js/map services/map-control-openlayersv2.js',
                                'src/main/js/core/map-services.js',
                                'src/main/js/core/map-directives.js',
                                'src/main/js/core/map-config.js',
                                'src/main/js/core/control-directives.js',
                                'src/main/js/core/feature-directives.js',
                                'src/main/js/core/layer-services.js',
                                'src/main/js/core/layer-directives.js',
                                'src/main/js/core/marker-directives.js',
                                'src/main/js/core/core.js',
                                'src/main/js/core/services.js',
                                'src/main/js/ui/ui-directives.js',
                                'src/main/js/config/directives.js'],
                                styles: ["http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css",
                                "http://code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css"],
				html5Mode: false
			},
			api: {
				src: ['src/**/*.js', '!src/**/*.spec.js'],
				title: 'API Documentation'
			}
		}
	});
	grunt.loadNpmTasks('grunt-ngdocs');
	grunt.registerTask('default',['ngdocs']);
};