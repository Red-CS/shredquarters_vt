import { AdminLayout, ConsoleLayout } from '@components/layouts'
import { InputElement } from '@components/inputs'
import type { ConsoleStep } from '@components/layouts'

// TODO - Admin Page getStaticProps -> useContext to get names and qualities of projects

const UpdateEvent = () => {
  const eventNames = ['one, two, three']
  const UpdateEventSteps: ConsoleStep[] = [
    // Event to Update
    {
      label: 'Select an event to update',
      component: (
        <InputElement
          label='Selected Event'
          registerLabel='event_name'
          variant='select'
          list={eventNames}
        />
      )
    },

    // Update name?
    // TODO - Inputs with placeholder don't need to have new info,
    // it should just be previous value if blanked
    {
      label: "Update the event's name",
      component: (
        <InputElement
          label='Name'
          registerLabel='new_name'
          placeholder='Previous name here'
        />
      )
    },

    // Event Characteristics
    {
      label: 'Update the characteristics',
      component: (
        <>
          <InputElement label='Date' type='date' registerLabel='date' />
          <InputElement label='Start Time' type='time' registerLabel='start' />
          <InputElement label='End Time' type='time' registerLabel='end' />
        </>
      )
    },

    {
      label: 'Update the location',
      component: (
        <InputElement
          label='Location'
          registerLabel='new_location'
          placeholder='Previous location here'
        />
      )
    }
  ]

  return <ConsoleLayout steps={UpdateEventSteps} api='/api/event/update' />
}

UpdateEvent.PageLayout = AdminLayout

export default UpdateEvent
