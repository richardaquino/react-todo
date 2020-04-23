var React = require('react');
var moment = require('moment');

var ToDo = React.createClass({
    render: function() {
        var {id, text, completed, createdAt, completedAt} = this.props;
        var renderDate = () => {
                var message = 'Created: ';
                var timestamp = createdAt;
            
                if(completed) {
                    message = 'Completed: ';
                    timestamp = completedAt;
                }

            return message + moment.unix(timestamp).format('MMM Do YYY @ h:mm a'); 
        };

        return  (
            <div onClick={() => {
                this.props.onToggle(id);
            }}>
                <input type="checkbox" ref="completed" checked={completed} />
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        )
    }

});

module.exports = ToDo;