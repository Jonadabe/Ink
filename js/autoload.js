if( !!SAPO && ("Dom" in SAPO) && ("Loaded" in SAPO.Dom) ){

    ( function(){
        var autoload = {

            /***************************
             * DatePicker - Default CSS selector is .ink-datepicker
             ***************************/
             'DatePicker': '.ink-datepicker',

            /***************************
             * Modal - Default CSS selector is .ink-modal
             ***************************/
             'Modal': '.ink-modal',

            /***************************
             * ProgressBar - Default CSS selector is .ink-progress-bar
             ***************************/
             'ProgressBar': '.ink-progress-bar',

            /***************************
             * SortableList - Default CSS selector is .ink-sortable-list
             ***************************/
             'SortableList': '.ink-sortable-list',

            /***************************
             * Spy - Default CSS selector is *[data-spy="true"]
             ***************************/
             'Spy': '*[data-spy="true"]',

            /***************************
             * Sticky - Default CSS selector is .ink-navigation.sticky
             ***************************/
             'Sticky': '.ink-navigation.sticky',

            /***************************
             * Table - Default CSS selector is .ink-table
             ***************************/
             'Table': '.ink-table',

            /***************************
             * Tabs - Default CSS selector is .ink-tabs
             ***************************/
             'Tabs': '.ink-tabs',

            /***************************
             * TreeView - Default CSS selector is .ink-tree-view
             ***************************/
             'TreeView': '.ink-tree-view',

            /***************************
             * Toggle - Default CSS selector is .toggle
             ***************************/
             'Toggle': '.toggle'



        };

        SAPO.Ink.siteInkInstances = {};
        SAPO.Dom.Loaded.run(function(){
            for( var module in autoload ){
                if( autoload.hasOwnProperty(module) ){
                    SAPO.Ink.siteInkInstances[module] = [];
                    SAPO.Dom.Selector.select( autoload[module] ).forEach(function( element ){ SAPO.Ink.siteInkInstances[module].push( new SAPO.Ink[module]( element ) ); });
                }
            }
        });
    })();

}
