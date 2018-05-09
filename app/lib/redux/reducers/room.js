const initialState =
{
	url               : null,
	state             : 'new', // new/connecting/connected/disconnected/closed,
	activeSpeakerName : null,
	peerHeight        : 300,
	peerWidth         : 400,
	turnServers       : null
};

const room = (state = initialState, action) =>
{
	switch (action.type)
	{
		case 'SET_ROOM_URL':
		{
			const { url } = action.payload;

			return { ...state, url };
		}

		case 'SET_ROOM_STATE':
		{
			const roomState = action.payload.state;

			if (roomState == 'connected')
				return { ...state, state: roomState };
			else
				return { ...state, state: roomState, activeSpeakerName: null };
		}

		case 'SET_ROOM_ACTIVE_SPEAKER':
		{
			const { peerName } = action.payload;

			return { ...state, activeSpeakerName: peerName };
		}

		case 'SET_COMPONENT_SIZE':
		{
			const { peerWidth, peerHeight } = action.payload;

			return { ...state, peerWidth: peerWidth, peerHeight: peerHeight };
		}
		
		case 'UPDATE_ICE_SERVERS':
		{
			const { iceServers } = action.payload;

			return { ...state, turnServers: iceServers };
		}

		default:
			return state;
	}
};

export default room;
