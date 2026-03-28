import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  tipCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 32,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 24,
  },
  tipIcon: {
    fontSize: 60,
    marginBottom: 16,
  },
  tipTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  tipDescription: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
  },
  indicator: {
    fontSize: 16,
    fontWeight: '600',
    color: '#777',
    marginBottom: 16,
  },
  statusMessage: {
    fontSize: 14,
    color: '#999',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  nextButton: {
    backgroundColor: '#4a90d9',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
